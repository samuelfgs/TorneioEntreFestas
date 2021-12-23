
import React, {ReactNode} from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Table, Tag, Space } from 'antd';



export interface TableMatchProps {
  children?: ReactNode;
  tenistas?: string[];
  className?: string;
  verbose?: boolean;
}

export function TableMatch({ children, className, verbose, tenistas }: TableMatchProps) {
  const columns = [
    {
      title: '#',
      dataIndex: 'pos',
      key: 'pos',
    },
    {
      title: 'Tenista',
      dataIndex: 'tenista',
      key: 'tenista',
    },
    {
      title: 'V',
      dataIndex: 'v',
      key: 'v',
    },
    {
      title: 'D',
      key: 'd',
      dataIndex: 'd',
    },
    {
      title: 'GV',
      dataIndex: 'gv',
      key: 'gv',
    },
    {
      title: 'GP',
      dataIndex: 'gp',
      key: 'gp',
    },
    {
      title: 'SG',
      dataIndex: 'sg',
      key: 'sg',
    },
  ];

  const data = tenistas!.map(name => {
    return {
      key: name,
      tenista: name,
      pos: 1,
      v: 0,
      d: 0,
      gv: 0,
      gp: 0,
      sg: 0
    }
  });

  return (
    <Table columns={columns} dataSource={data} pagination={false} />
  );
}