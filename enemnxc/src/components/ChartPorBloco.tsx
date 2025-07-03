import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from 'recharts';

const data = [
  { name: 'Bloco 1', Respondidas: 50, Acertos: 40 },
  { name: 'Bloco 2', Respondidas: 80, Acertos: 64 },
  { name: 'Bloco 3', Respondidas: 120, Acertos: 91 },
  { name: 'Bloco 4', Respondidas: 72, Acertos: 53 },
];

export default function ChartPorBloco() {
  return (
    <ResponsiveContainer width="100%" height={250}>
      <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#333" />
        <XAxis dataKey="name" stroke="#ccc" />
        <YAxis stroke="#ccc" />
        <Tooltip />
        <Legend />
        <Bar dataKey="Respondidas" fill="#8884d8" barSize={30} radius={[8, 8, 0, 0]} />
        <Bar dataKey="Acertos" fill="#82ca9d" barSize={30} radius={[8, 8, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}
