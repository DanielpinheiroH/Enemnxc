// src/components/ChartTotal.tsx
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from 'recharts';

const data = [
  { name: 'Total', Respondidas: 322, Acertos: 248, Erros: 74 },
];

export default function ChartTotal() {
  return (
    <ResponsiveContainer width="100%" height={250}>
      <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#333" />
        <XAxis dataKey="name" stroke="#ccc" />
        <YAxis stroke="#ccc" />
        <Tooltip />
        <Legend />
        <Bar dataKey="Respondidas" fill="#8884d8" barSize={40} radius={[10, 10, 0, 0]} />
        <Bar dataKey="Acertos" fill="#82ca9d" barSize={40} radius={[10, 10, 0, 0]} />
        <Bar dataKey="Erros" fill="#ff7373" barSize={40} radius={[10, 10, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}