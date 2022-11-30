import React from 'react';
import {
    Chart as ChartJS,
    LineController,
    LineElement,
    PointElement,
    LinearScale,
    Title,
    CategoryScale,
} from 'chart.js';

import { Chart, Line } from 'react-chartjs-2';
import { DashboardLayout } from '../../layouts';

ChartJS.register(
    LineController,
    LineElement,
    PointElement,
    LinearScale,
    CategoryScale,
    Title,
);

const Dashboard = () => {
    return (
        <DashboardLayout>
            <Line
                type="line"
                datasetIdKey="id"
                data={{
                    labels: ['Jun', 'Jul', 'Aug'],
                    datasets: [
                        {
                            id: 1,
                            label: '',
                            data: [5, 6, 7],
                        },
                        
                    ],
                }}
            />
        </DashboardLayout>
    );
};

export default Dashboard;
