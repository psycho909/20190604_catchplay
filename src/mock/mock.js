import Mock from 'mockjs'

export default Mock.mock('/api/users','get', {
    'result|5-15': [
        {
            id: '@guid',
            username: '@name',
            'gender|1': ['male', 'female'],
            age: '@integer(18,100)',
            'device|1': ['IOS', 'Android', 'PC']
        }
    ]
})
