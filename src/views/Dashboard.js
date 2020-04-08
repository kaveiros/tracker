import React, { Component } from 'react'
import LineChart from "@rsuite/charts/lib/charts/LineChart";
import PieChart from "@rsuite/charts/lib/charts/PieChart"
import {backgroundStyle} from '../style/Style'
import { Container } from 'rsuite';

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

export default class Dashboard extends Component {

    render() {
        return (
            <Container style={backgroundStyle}>
                <LineChart name="Βλάβες βράδυ" data={data} />
                <PieChart name="Κατηγορίες έργων" colors={colors} data={data}/>
                </Container>

        )
    }
}