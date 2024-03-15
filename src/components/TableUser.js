import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';

import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUserRedux, fetchAllUsers } from '../action/actions';

const TableUser = () => {
    // const [listUsers, setListUsers] = useState()

    const dispatch = useDispatch()
    const listUsers = useSelector((state) => state.user.listUsers)
    const isLoading = useSelector((state) => state.user.isLoading)
    const isError = useSelector((state) => state.user.isError)

    const handleDeleteUser = (user) => {
        dispatch(deleteUserRedux(user.id))
        console.log(user)
    }

    useEffect(() => {
        dispatch(fetchAllUsers())
    }, [])

    // if (isError === false && isLoading === true) {
    //     return (
    //         <Container>
    //             <hr />
    //             <Table striped bordered hover>
    //                 <thead>
    //                     <tr>
    //                         <th>#</th>
    //                         <th>Email</th>
    //                         <th>Username</th>
    //                         <th>Action</th>
    //                     </tr>
    //                 </thead>
    //                 <tbody>
    //                 </tbody>
    //             </Table>
    //             <div>Loading data...</div>

    //         </Container>
    //     )
    // }

    // if (isError === false && isLoading === false) {
    //     return (
    //         <Container>
    //             <hr />
    //             <Table striped bordered hover>
    //                 <thead>
    //                     <tr>
    //                         <th>#</th>
    //                         <th>Email</th>
    //                         <th>Username</th>
    //                         <th>Action</th>
    //                     </tr>
    //                 </thead>
    //                 <tbody>
    //                     {listUsers && listUsers.length > 0 &&
    //                         listUsers.map((item, index) => {
    //                             return (
    //                                 <tr key={`user-${index}`}>
    //                                     <td>{index + 1}</td>
    //                                     <td>{item.email}</td>
    //                                     <td>{item.username}</td>
    //                                     <td>
    //                                         <button
    //                                             className='btn btn-danger'
    //                                             onClick={() => handleDeleteUser(item)}
    //                                         >Delete</button>
    //                                         <button className='btn btn-danger'>Delete</button>
    //                                     </td>
    //                                 </tr>
    //                             )
    //                         })}
    //                 </tbody>
    //             </Table>
    //         </Container>)
    // }

    // if (isError === true && isLoading === false) {
    //     return (
    //         <Container>
    //             <hr />
    //             <Table striped bordered hover>
    //                 <thead>
    //                     <tr>
    //                         <th>#</th>
    //                         <th>Email</th>
    //                         <th>Username</th>
    //                         <th>Action</th>
    //                     </tr>
    //                 </thead>
    //                 <tbody>
    //                 </tbody>
    //             </Table>
    //             <div>Something wrongs, please try again...</div>
    //         </Container>)
    // }

    return (
        <>
            <Container>
                <hr />
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Email</th>
                            <th>Username</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {isError === true ?
                            <>
                                <tr><td colSpan={4}>Something wrongs, please try again...</td></tr>
                            </>
                            :
                            <>
                                {isLoading === true ?
                                    <>
                                        <tr><td colSpan={4}>Loading data...</td></tr>
                                    </>
                                    :
                                    <>
                                        {listUsers && listUsers.length > 0 &&
                                            listUsers.map((item, index) => {
                                                return (
                                                    <tr key={`user-${index}`}>
                                                        <td>{index + 1}</td>
                                                        <td>{item.email}</td>
                                                        <td>{item.username}</td>
                                                        <td>
                                                            <button
                                                                className='btn btn-danger'
                                                                onClick={() => handleDeleteUser(item)}
                                                            >Delete</button>

                                                        </td>
                                                    </tr>
                                                )
                                            })}
                                    </>
                                }
                            </>
                        }
                    </tbody>
                </Table>
            </Container>
        </>
    )
    return (<></>)
}
export default TableUser