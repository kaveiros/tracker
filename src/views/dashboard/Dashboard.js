import React from 'react'
import { Header, Content, Breadcrumb, FlexboxGrid, Col } from 'rsuite';

import {
    LineChart, Line, CartesianGrid, PieChart, Pie, ComposedChart,
    BarChart, Bar, XAxis, YAxis, Tooltip, Legend, Area,
    RadialBarChart, RadialBar
} from 'recharts';

const data = [
    {
        name: 'Page A', uv: 4000, pv: 2400, amt: 2400,
    },
    {
        name: 'Page B', uv: 3000, pv: 1398, amt: 2210,
    },
    {
        name: 'Page C', uv: 2000, pv: 9800, amt: 2290,
    },
    {
        name: 'Page D', uv: 2780, pv: 3908, amt: 2000,
    },
    {
        name: 'Page E', uv: 1890, pv: 4800, amt: 2181,
    },
    {
        name: 'Page F', uv: 2390, pv: 3800, amt: 2500,
    },
    {
        name: 'Page G', uv: 3490, pv: 4300, amt: 2100,
    },
];

const data01 = [
    { name: 'Group A', value: 400 }, { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 }, { name: 'Group D', value: 200 },
];
const data02 = [
    { name: 'A1', value: 100 },
    { name: 'A2', value: 300 },
    { name: 'B1', value: 100 },
    { name: 'B2', value: 80 },
    { name: 'B3', value: 40 },
    { name: 'B4', value: 30 },
    { name: 'B5', value: 50 },
    { name: 'C1', value: 100 },
    { name: 'C2', value: 200 },
    { name: 'D1', value: 150 },
    { name: 'D2', value: 50 },
];

const data3 = [
    {
        name: 'Page A', uv: 4000, pv: 2400, amt: 2400,
    },
    {
        name: 'Page B', uv: 3000, pv: 1398, amt: 2210,
    },
    {
        name: 'Page C', uv: 2000, pv: 9800, amt: 2290,
    },
    {
        name: 'Page D', uv: 2780, pv: 3908, amt: 2000,
    },
    {
        name: 'Page E', uv: 1890, pv: 4800, amt: 2181,
    },
    {
        name: 'Page F', uv: 2390, pv: 3800, amt: 2500,
    },
    {
        name: 'Page G', uv: 3490, pv: 4300, amt: 2100,
    },
];

const data04 = [
    { name: 'Group A', value: 400 }, { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 }, { name: 'Group D', value: 200 },
    { name: 'Group E', value: 278 }, { name: 'Group F', value: 189 },
];

const data05 = [
    { name: 'Group A', value: 2400 }, { name: 'Group B', value: 4567 },
    { name: 'Group C', value: 1398 }, { name: 'Group D', value: 9800 },
    { name: 'Group E', value: 3908 }, { name: 'Group F', value: 4800 },
];

const data06 = [
    {
        name: '18-24', uv: 31.47, pv: 2400, fill: '#8884d8',
    },
    {
        name: '25-29', uv: 26.69, pv: 4567, fill: '#83a6ed',
    },
    {
        name: '30-34', uv: 15.69, pv: 1398, fill: '#8dd1e1',
    },
    {
        name: '35-39', uv: 8.22, pv: 9800, fill: '#82ca9d',
    },
    {
        name: '40-49', uv: 8.63, pv: 3908, fill: '#a4de6c',
    },
    {
        name: '50+', uv: 2.63, pv: 4800, fill: '#d0ed57',
    },
    {
        name: 'unknow', uv: 6.67, pv: 4800, fill: '#ffc658',
    },
];

const style = {
    top: 0,
    left: 350,
    lineHeight: '24px',
};

const Dashboard = () => {


    return (
        <div>

            <Header>
                <Breadcrumb>
                    <Breadcrumb.Item href="/" active>Αρχική</Breadcrumb.Item>
                </Breadcrumb>
            </Header>
            <Content>
                <FlexboxGrid justify="space-around">
                    <FlexboxGrid.Item componentClass={Col} colspan={24} md={6}>
                        <LineChart
                            width={500}
                            height={300}
                            data={data}
                            margin={{
                                top: 5, right: 30, left: 20, bottom: 5,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                        </LineChart>
                    </FlexboxGrid.Item>
                    <FlexboxGrid.Item componentClass={Col} colspan={24} md={6}>
                        <BarChart
                            width={500}
                            height={300}
                            data={data3}
                            margin={{
                                top: 5, right: 30, left: 20, bottom: 5,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="pv" fill="#8884d8" />
                            <Bar dataKey="uv" fill="#82ca9d" />
                        </BarChart>
                    </FlexboxGrid.Item>
                    <FlexboxGrid.Item componentClass={Col} colspan={24} md={6} smHidden>
                        <PieChart width={300} height={300}>
                            <Pie data={data01} dataKey="value" cx={200} cy={200} outerRadius={60} fill="#8884d8" />
                            <Pie data={data02} dataKey="value" cx={200} cy={200} innerRadius={70} outerRadius={90} fill="#82ca9d" label />
                        </PieChart>
                    </FlexboxGrid.Item>
                </FlexboxGrid>
                <FlexboxGrid justify="space-around">
                    <FlexboxGrid.Item componentClass={Col} colspan={24} md={6}>
                        <ComposedChart
                            width={500}
                            height={300}
                            data={data}
                            margin={{
                                top: 20, right: 20, bottom: 20, left: 20,
                            }}
                        >
                            <CartesianGrid stroke="#f5f5f5" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
                            <Bar dataKey="pv" barSize={20} fill="#413ea0" />
                            <Line type="monotone" dataKey="uv" stroke="#ff7300" />
                            {/* <Scatter dataKey="cnt" fill="red" /> */}
                        </ComposedChart>
                    </FlexboxGrid.Item>
                    <FlexboxGrid.Item componentClass={Col} colspan={24} md={6}>
                        <PieChart width={400} height={400}>
                            <Pie dataKey="value" isAnimationActive={false} data={data04} cx={200} cy={200} outerRadius={80} fill="#8884d8" label />
                            <Pie dataKey="value" data={data05} cx={500} cy={200} innerRadius={40} outerRadius={80} fill="#82ca9d" />
                            <Tooltip />
                        </PieChart>
                    </FlexboxGrid.Item>
                    <FlexboxGrid.Item componentClass={Col} colspan={24} md={6} smHidden>
                        <RadialBarChart width={400} height={300} cx={150} cy={150} innerRadius={20} outerRadius={140} barSize={10} data={data06}>
                            <RadialBar minAngle={15} label={{ position: 'insideStart', fill: '#fff' }} background clockWise dataKey="uv" />
                            <Legend iconSize={10} width={120} height={140} layout="vertical" verticalAlign="middle" wrapperStyle={style} />
                        </RadialBarChart>
                    </FlexboxGrid.Item>
                </FlexboxGrid>
            </Content>
        </div>
    )
}

export default Dashboard