function List(){
    const numbers=[12,53,251,632,125,865]
    const numbers2=numbers.map((value)=> value*100)
    const people = [{name: "Kacper", age: "19,"}, {name: "Pietruszka", age: 50}]

    return <>
        <div>{numbers2.map((value)=> {return <span>{value}, </span>})}</div>
        <div>{people.map((val, i) => {return <div key={i}><p>Imię: {val.name}</p><p>Wiek: {val.age}</p></div>})}</div>
    </>
}

export default List