import React from 'react';
import { Table, Tag  } from 'antd';
import { Toast, ToastBody, ToastHeader } from 'reactstrap';
import NavBar from './NavBar';
import './custom.css';


const userinfo=[]
const columns = [
    {
        title: 'Id',
        dataIndex: 'id',
        key: 'id',
        
      },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
        title: 'Gender',
        dataIndex: 'gender',
        key: 'gender',
        render:  (gender,index)=>
          
        <Tag color='green' key={index}>
          {gender.toUpperCase()}
          </Tag>
      },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Mobile No',
      key: 'phone',
      dataIndex: 'phone',
      render: tags => (
        <span>
          {tags.map(tag => {
            let color = tag.length > 5 ? 'orange' : 'green';
            
            return (
              <Tag color={color} key={tag.toUpperCase()}>
                {tag}
              </Tag>
            );
          })}
        </span>
      ),
    },
    
  ];

  
export default function UserTable({users}){


        for(let i=0;i<users.length;i++){

              userinfo.push({

                  'id':users[i]['id'],
                  'name':users[i]['name'],
                  'age':users[i]['age'],
                  'gender':users[i]['gender'],
                  'address':users[i]['email'],
                  'phone':[users[i]['phoneNo']]
              })
        }

    return (

        <React.Fragment>
            <NavBar />

            <div className="p-3 my-2 rounded">
            <Toast style={{'maxWidth':'1400px','marginTop':'20px'}}>
            <ToastHeader>
                Users Info
            </ToastHeader>
            <ToastBody>
                <Table className='main-table' columns={columns} dataSource={userinfo} />
            </ToastBody>
            </Toast>
        </div>
        </React.Fragment>
    )
}