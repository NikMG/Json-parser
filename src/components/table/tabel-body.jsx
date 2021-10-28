const TabelBody = (props) => {
    return (
        <tbody className="list__body">
            {props.personal.map((person) => {
                return(
                <tr id={'person' + person.id} className="list__body--row row" key={person.id} onClick={() => {props.choosePerson(person.id)}}>
                    <td className="row__item">
                        {person.id}
                    </td>
                    <td className="row__item">
                        {person.name}
                    </td>
                    <td className="row__item">
                        {person.role}
                    </td>
                    <td className="row__item">
                        {person.job}
                    </td>
                    <td className="row__item">
                        {person.department}
                    </td>
                </tr>
                );
                 })}
        </tbody>
    );
}

export default TabelBody;