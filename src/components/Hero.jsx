import "../css/mainContent.css";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Sun',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  
  },
  {
    name: 'Mon',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Tue',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Wed',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Thur',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Fri',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Sat',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const Hero = () => {
  return (
    <div className="chart-container">
    <div className="chart-items">
    <h1 className="chart-heading">Upcoming hours</h1>
    <ResponsiveContainer width="100%" height={200} className="chart">
      <AreaChart
        width={500}
        height={400}
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid vertical={true} horizontal={false}  />
        <XAxis dataKey="name" />
        <YAxis dataKey="pv" hide />
        <Tooltip />
        <Area type="monotone" dataKey="uv" stroke="#8884d8" strokeWidth={1}  fill="blue" />
      </AreaChart>
    </ResponsiveContainer>
    </div>
    </div>
  );
};

export default Hero;
