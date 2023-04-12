import React from 'react';
import {
    Radar,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis,
    Tooltip
} from "recharts";
const Stat = () => {
    const data = [
        {
            assignment: "Assignment 1",
            obtainedMark: 60,
            fullMark: 60
        },
        {
            assignment: "Assignment 2",
            obtainedMark: 59,
            fullMark: 60
        },
        {
            assignment: "Assignment 3",
            obtainedMark: 60,
            fullMark: 60
        },
        {
            assignment: "Assignment 4",
            obtainedMark: 58,
            fullMark: 60
        },
        {
            assignment: "Assignment 5",
            obtainedMark: 60,
            fullMark: 60
        },
        {
            assignment: "Assignment 6",
            obtainedMark: 60,
            fullMark: 60
        },
        {
            assignment: "Assignment 7",
            obtainedMark: 50,
            fullMark: 60
        },
        {
            assignment: "Assignment 8",
            obtainedMark: 60,
            fullMark: 60
        }

    ];

    return (
        <div>
            <div className='bg-blue-100 w-full h-32'>
                <h1 className='text-4xl text-center font-extrabold'>Statistics</h1>
            </div>
            <div className=''>
                <RadarChart
                    className='mx-auto'
                    cx={400}
                    cy={250}
                    outerRadius={150}
                    width={780}
                    height={500}
                    data={data}
                >
                    <PolarGrid />
                    <PolarAngleAxis dataKey="assignment" />
                    <PolarRadiusAxis />
                    <Radar
                        name="Marks"
                        dataKey="obtainedMark"
                        stroke="#8884d8"
                        fill="#8884d8"
                        fillOpacity={0.6}
                    />
                    <Tooltip></Tooltip>
                </RadarChart>
            </div>
        </div>
    );
};

export default Stat;