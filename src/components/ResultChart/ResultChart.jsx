import React from 'react';
import { Line, LineChart, XAxis, YAxis } from 'recharts';


const resultData = [
  
  {
    "id": 1,
    "name": "Rahim",
    "math": 85,
    "physics": 78,
    "chemistry": 82
  },
  {
    "id": 2,
    "name": "Karim",
    "math": 72,
    "physics": 80,
    "chemistry": 75
  },
  {
    "id": 3,
    "name": "Sadia",
    "math": 90,
    "physics": 88,
    "chemistry": 91
  },
  {
    "id": 4,
    "name": "Nusrat",
    "math": 67,
    "physics": 74,
    "chemistry": 70
  },
  {
    "id": 5,
    "name": "Hasan",
    "math": 76,
    "physics": 69,
    "chemistry": 73
  },
  {
    "id": 6,
    "name": "Mim",
    "math": 94,
    "physics": 90,
    "chemistry": 89
  },
  {
    "id": 7,
    "name": "Tanvir",
    "math": 81,
    "physics": 77,
    "chemistry": 79
  },
  {
    "id": 8,
    "name": "Jannat",
    "math": 88,
    "physics": 84,
    "chemistry": 86
  },
  {
    "id": 9,
    "name": "Sohan",
    "math": 65,
    "physics": 71,
    "chemistry": 68
  },
  {
    "id": 10,
    "name": "Priya",
    "math": 92,
    "physics": 87,
    "chemistry": 90
  }
]


const ResultChart = () => {
  return (
    <div>
      <LineChart width={800} height={500} data={resultData}>
      <XAxis dataKey={'name'}></XAxis>
      <YAxis></YAxis>
        <Line dataKey={'math'}></Line>
        <Line dataKey={'chemistry'} stroke='red'></Line>
        <Line dataKey={'physics'} stroke='white'></Line>
      </LineChart>
    </div>
  );
};

export default ResultChart;