//In this code we learn how to rander a list 

export default function ListPicker({ values }) {
    const randInt = Math.floor(Math.random() * values.length) + 1;
    const randElement = values[randInt];
    return <>

    </>
}