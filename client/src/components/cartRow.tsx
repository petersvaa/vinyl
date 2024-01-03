export default function CartRow(name: string, price: number){
    return (
        <>
            <tr>
                <td>{name}</td>
                <td>{price}</td>
            </tr>
        </>
    )
}