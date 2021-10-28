import './styles/table.css'
import Table from './components/table/tabel';
import Buttons from './components/buttons/buttons';
import { useState, useLayoutEffect, useRef } from 'react'
import Pagination from './components/pagination/pagination';
import ConfirmModal from './components/modals/confirmModal';
import AddModal from './components/modals/addModal';

function App() {
  const [personal, setPersonal] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [pageCount, setPageCount] = useState(1);
  const [currPage, setCurrPage] = useState(0);
  const [person, setPerson] = useState(null);
  const [isConfirm, setIsConfirm] = useState(false);
  const [confirmPerson, setConfirmPerson] = useState(null);
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [job, setJob] = useState('');
  const [department, setDepartment] = useState('');
  const [isAdd, setIsAdd] = useState(false);
  const [pushed, setPushed] = useState(false);
  const firstUpdate = useRef(true);

  const loadList = () => {
    fetch(`http://localhost:8000/personal?_page=${currPage + 1}&_limit=10`, {
      method: 'GET'
    })
      .then(res => {
        let pages = Math.ceil(res.headers.get('X-Total-Count') / 10);
        setPageCount(pages);
        return res.json();
      })
      .then(data => {
        setPersonal(data);
        setIsLoaded(true);
        console.log('hi')
      });
  }

  const choosePerson = (id) => {
    setPerson(id);
  }

  const addPerson = () => {
    setIsAdd(true);
  }

  useLayoutEffect(() => {
    if (person == null) {
      return;
    }
    document.querySelectorAll('.list__body--row').forEach((element) => {
      element.classList.remove('choosen');
    });
    document.querySelector(`#person${person}`).classList.add('choosen');
  }, [person])

  const addToList = () => {
    fetch('http://localhost:8000/personal', {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(
        {
          "name": name,
          "role": role,
          "job": job,
          "department": department
        }
      )
    });
    setPushed(true);
    setIsAdd(false);
    setName('');
    setRole('');
    setDepartment('');
    setJob('');
  }

  const deleteFromList = (status) => {
    if (!status) {
      setIsConfirm(false);
      return
    }
    fetch(`http://localhost:8000/personal/${person}`, {
      method: 'delete'
    });
    setIsConfirm(false);
    setPushed(true);
  }

  const deleteConfirm = () => {
    if (person == null) {
      return;
    }
    fetch(`http://localhost:8000/personal/${person}`, {
      method: 'get'
    })
      .then(res => {
        return res.json()
      })
      .then(item => {
        setConfirmPerson(item);
        setIsConfirm(true);
      });
  }

  const handlePageChange = (selectedObject) => {
    setCurrPage(selectedObject.selected);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  }

  const handleJobChange = (e) => {
    setJob(e.target.value);
  }

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  }

  const handleDepartmentChange = (e) => {
    setDepartment(e.target.value);
  }

  useLayoutEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    loadList();
  }, [currPage]);// eslint-disable-line react-hooks/exhaustive-deps

  useLayoutEffect(() => {
    if (!pushed) {
      return
    }
    loadList();
    setPushed(false);
  }, [pushed]);// eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="container">
      <div className="json-table">
        <div className="json-table__wrapper">
          <Buttons fetch={loadList} deleteItem={deleteConfirm} addItem={addPerson} />
          <Table personal={personal} choosePerson={choosePerson} loaded={isLoaded} />
          {isLoaded && <Pagination pageCount={pageCount} pageChange={handlePageChange} />}
          {isConfirm && <ConfirmModal person={confirmPerson} deleteEvent={deleteFromList} />}
          {isAdd && <AddModal name={name} role={role} department={department} job={job} handleNameChange={handleNameChange} handleJobChange={handleJobChange} handleDepartmentChange={handleDepartmentChange} handleRoleChange={handleRoleChange} addToList={addToList} />}
        </div>
      </div>
    </div>
  );
}

export default App;
