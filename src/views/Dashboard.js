import React, { Component } from 'react'
import LineChart from "@rsuite/charts/lib/charts/LineChart";
import PieChart from "@rsuite/charts/lib/charts/PieChart"
import { backgroundStyle, footerStyle } from '../style/Style'
import { Container, Header, Footer, Content, Breadcrumb } from 'rsuite';
import PersonelTable from './PersonelTable';

const colors = [
    '#34c3ff',
    '#1464AC',
];

const data = [
    ['00:00', Math.random() * 10],
    ['01:00', Math.random() * 10],
    ['02:00', Math.random() * 10],
    ['03:00', Math.random() * 10],
    ['05:00', Math.random() * 10],
    ['06:00', Math.random() * 10],
    ['07:00', Math.random() * 10]
];

const Dashboard = () =>  {

        return (
            <div>
      
                <Header>
                    <Breadcrumb>
                        <Breadcrumb.Item href="/" active>Αρχική</Breadcrumb.Item>
                    </Breadcrumb>
                </Header>
                <Content>
                    <LineChart name="Βλάβες βράδυ" data={data} />
                    <PieChart name="Κατηγορίες έργων" colors={colors} data={data} />
                </Content>
                <Footer style={footerStyle}> Footer</Footer>
            </div>

        )
    }

export default Dashboard