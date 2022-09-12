import { useHistory, useLocation, useParams } from 'umi';
import type { ProColumns } from '@ant-design/pro-components';
import { EditableProTable } from '@ant-design/pro-components';
import { Button } from 'antd';
import React, { useEffect, useState } from 'react';

import styles from './index.less';

type DataSourceType = {
  id: React.Key;
  name: string;
  grade_id: number;
  status: number;
};

export const ClazzEditList = (props: any) => {
  const params: any = useParams();

  const location: any = useLocation();

  const history: any = useHistory();

  const [editableKeys, setEditableRowKeys] = useState<React.Key[]>([]);

  const [dataSource, setDataSource] = useState<DataSourceType[]>([]);

  const columns: ProColumns<DataSourceType>[] = [
    {
      title: '应用名称',
      dataIndex: 'name',
      formItemProps: {
        rules: [
          {
            required: true,
            whitespace: true,
            message: '此项是必填项',
          },
          {
            max: 64,
            whitespace: true,
            message: '最长为 64 位',
          },
          {
            min: 1,
            whitespace: true,
            message: '最小为 1 位',
          },
        ],
      },
    },
    {
      title: '应用类型',
      dataIndex: 'grade_id',
      valueType: 'select',
      // request: async () =>
      //     (await getGradeList()).map((item, index) => {
      //         return { value: item.id, label: item.name };
      //     }),
    },
    {
      title: '操作',
      valueType: 'option',
      width: 220,
      render: (text, record, _, action) => {
        return [
          <a
            key="editable"
            onClick={() => {
              action?.startEditable?.(record.id);
            }}
          >
            编辑
          </a>,
          <a
            key="delete"
            onClick={() => {
              //删除
              const call = async () => {
                // await remove(parseInt(record.id + ''));
                // let res = await getList();
                // setDataSource(res);
              };
              call();
            }}
          >
            删除
          </a>,
        ];
      },
    },
  ];

  useEffect(() => {
    const call = async () => {
      // let res = await getList();
      // console.log(res);
      // setDataSource(res);
    };
    call();
  }, []);

  return (
    <div className={styles.container}>
      <EditableProTable<DataSourceType>
        headerTitle={<span>应用管理</span>}
        columns={columns}
        rowKey="id"
        value={dataSource}
        onChange={setDataSource}
        recordCreatorProps={{
          position: 'top',
          newRecordType: 'dataSource',
          record: () => ({
            id: -1 * new Date().getTime(),
            name: '',
            grade_id: 0,
            status: 1,
          }),
        }}
        toolBarRender={() => {
          return [];
        }}
        editable={{
          type: 'multiple',
          editableKeys,
          onValuesChange: (record, recordList) => {
            console.log(record, 'onValuesChange');
          },
          onSave: async (rowKey, data, row) => {
            console.log(rowKey, data, row, 'onSave');
            // await waitTime(2000);
            // if (rowKey < 0) {
            //     //添加
            //     await insert({
            //         ':name': data['name'],
            //         ':grade_id': data['grade_id'],
            //         ':status': parseInt(data['status'] + ''),
            //     });

            //     let res = await getList();
            //     setDataSource(res);
            // } else {
            //     //修改
            //     await update(parseInt(rowKey + ''), {
            //         ':name': data['name'],
            //         ':grade_id': data['grade_id'],
            //         ':status': parseInt(data['status'] + ''),
            //     });
            // }
          },
          onChange: setEditableRowKeys,
        }}
      />
    </div>
  );
};

export default ClazzEditList;
