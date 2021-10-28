
import TabelBody from './tabel-body';

const Table = ( { personal, choosePerson, loaded }) => {
    return (
        <table className="json-table__list list">
            <thead>
                <tr className="list__head">
                    <th className="list__head--item">
                        ID
                    </th>
                    <th className="list__head--item">
                        NAME
                    </th>
                    <th className="list__head--item">
                        ROLE
                    </th>
                    <th className="list__head--item">
                        JOB
                    </th>
                    <th className="list__head--item">
                        DEPARTMENT
                    </th>
                </tr>
            </thead>
                {loaded && <TabelBody personal = {personal} choosePerson = {choosePerson}/>}
        </table>
    )
}

export default Table;