import { Button, Flex, Image, Modal, Table } from 'antd'
import getImgUrl from '../../../utils/getImgUrl'
const columns = [
	{
		title: 'Photo',
		dataIndex: 'photo',
		render: photo => <Image src={getImgUrl(photo)} />,
	},
	{
		title: 'Name',
		dataIndex: 'name',
		render: (_, { name, url }) => (
			<a target='_blank' href={url}>
				{name}
			</a>
		),
	},
	{
		title: 'Description',
		dataIndex: 'description',
		key: 'description',
	},
	{
		title: 'Actions',
		dataIndex: 'actions',
		render: (id, row) => (
			<Flex gap={30}>
				<Button onClick={() => editCategory(id, row)}>E</Button>
				<Button danger onClick={() => openConfirmDeleteModal(id)}>
					D
				</Button>
			</Flex>
		),
	},
]

const Porfolio = () => {
	const data = [
		{
			key: '1',
			name: 'John Brown',
			age: 32,
			address: 'New York No. 1 Lake Park',
			tags: ['nice', 'developer'],
		},
		{
			key: '2',
			name: 'Jim Green',
			age: 42,
			address: 'London No. 1 Lake Park',
			tags: ['loser'],
		},
		{
			key: '3',
			name: 'Joe Black',
			age: 32,
			address: 'Sydney No. 1 Lake Park',
			tags: ['cool', 'teacher'],
		},
	]
	return (
		<>
			<Table
				title={() => (
					<Flex align='center' justify='space-between'>
						<h2>Portfolios {} </h2>
					</Flex>
				)}
				// loading= {loading}
				dataSource={data}
				columns={columns}
				// pagination={{
				// 	total,
				// 	page,
				// 	pageSize: LIMIT,
				// 	onchange: (page) => dispatch(changePage(page))
				// 	}
				// }
			/>
			<Modal
				title='Portfolio data'
				// open={isOpen}
				// okText={selected == null ? "Add" : "Save"}
				cancelText='Cencel'
				// onCancel={()=> dispatch(controlModal())}
				// onOk={onOk}
			></Modal>
		</>
	)
}

export default Porfolio
