import React, { useState, useEffect } from 'react';
import PaginableTable from './../paginableTable/PaginableTable';

import {GiCancel} from 'react-icons/gi';
import {BiSolidEditAlt} from 'react-icons/bi';

import './style.scss'
import axios from 'axios';

import base_url from '../../settings/base_url';

function ProfileJob({}) {
    const jwtToken = localStorage.getItem('jwtToken');


    const jobColumns = ['Наименование организации', 'Должность', 'Начало работы', 'Конец работы', 'Actions'];
    const [jobRows, setJobRows] = useState([
        {job_ex_id: 1, org_name: "AFM", position: "Digitalization", start_date: null, end_date: null}
    ]);
    const jobRowsPerPage = 5;

    const [data, setData] = useState(null);
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [updateData, setUpdateData] = useState(false);

    useEffect(() => {
        
        const fetchData = async () => {
            try {
                const response = await axios.get(`${base_url}/api/aml/auth/getJob`, {
                    headers: {
                        Authorization: `Bearer ${jwtToken}`,
                    },
                });

                console.log(response.data)

                if (response.status === 200) {
                    setJobRows(response.data);
                } else {
                    // Handle other status codes if needed
                    setError(response.statusText);
                    console.log(response.statusText);
                }
            } catch (error) {
                setError(error);
                console.error(error);
            }

            setLoading(false);
        };
        
        fetchData();
      }, [updateData]);

    const handleOnAdd = (data) => {
        console.log("handleOnAdd called")
        const user_id = localStorage.getItem('user_id');


        const options = {
            headers: {
                Authorization: `Bearer ${jwtToken}`,
            },
        }

        const params = {
            user_id: user_id,
            org_name: data.name, 
            position: data.subname, 
            start_date: data.start_date, 
            end_date: data.end_date, 
        }

        const fetchData = async () => {
            setLoading(true);

            try {
                const response = await axios.post(`${base_url}/api/aml/auth/createJob`, params, options);


                if (response.status === 200) {
                    setJobRows(response.data);
                } else {
                    // Handle other status codes if needed
                    setError(response.statusText);
                    console.log(response.statusText);
                }
            } catch (error) {
                setError(error);
                console.error(error);
            }

            setLoading(false);
            setUpdateData(prev => !prev)
        }
        
        fetchData();
    }

    const handleJobDelete = (id) => {
        const fetchData = async () => {
            setLoading(true);
            const options = {
                headers: {
                    Authorization: `Bearer ${jwtToken}`,
                },
            }

            console.log(id)

            try {
                const response = await axios.delete(`${base_url}/api/aml/auth/deleteJob/${id}`, options);


                if (response.status === 200) {
                } else {
                    setError(response.statusText);
                    console.log(response.statusText);
                }
            } catch (error) {
                setError(error);
                console.error(error);
            }

            setLoading(false);
            setUpdateData(prev => !prev)
        }
        
        fetchData();
        setUpdateData(prev => !prev)
    }

    return ( 
        <div className="job-info">
            <div className="title">Опыт работы</div>
            <div className='table'>
                {
                    !isLoading 
                        ? (
                            <PaginableTable columns={jobColumns} rows={jobRows} rowsPerPage={jobRowsPerPage} isExtendable={true} handleOnAdd={handleOnAdd}>
                                <BiSolidEditAlt size={23} color='#858C94' style={{order: 1, cursor: 'pointer'}}/>
                                <GiCancel size={23} color='#858C94' style={{order: 0, cursor: 'pointer'}} onClick={(e) => {

                                    const job_ex_id = e.target.parentElement.parentElement.id;

                                    console.log(job_ex_id)

                                    handleJobDelete(job_ex_id);

                                }}/>
                            </PaginableTable>
                        )
                        : null
                }
            </div>
        </div>    
    );
}

export default ProfileJob;