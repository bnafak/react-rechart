import { LineChart, Line } from 'recharts';


const Chart = () => {
    const subjectMarksData = [
        {"id": 1, "name": "Alice", "math_marks": 85, "physics_marks": 78, "chemistry_marks": 90},
        {"id": 2, "name": "Bob", "math_marks": 78, "physics_marks": 82, "chemistry_marks": 85},
        {"id": 3, "name": "Charlie", "math_marks": 92, "physics_marks": 88, "chemistry_marks": 92},
        {"id": 4, "name": "David", "math_marks": 65, "physics_marks": 70, "chemistry_marks": 75},
        {"id": 5, "name": "Eva", "math_marks": 88, "physics_marks": 85, "chemistry_marks": 80},
        {"id": 6, "name": "Frank", "math_marks": 70, "physics_marks": 65, "chemistry_marks": 72},
        {"id": 7, "name": "Grace", "math_marks": 95, "physics_marks": 92, "chemistry_marks": 98},
        {"id": 8, "name": "Hannah", "math_marks": 82, "physics_marks": 78, "chemistry_marks": 85},
        {"id": 9, "name": "Ian", "math_marks": 75, "physics_marks": 68, "chemistry_marks": 70},
        {"id": 10, "name": "Julia", "math_marks": 90, "physics_marks": 85, "chemistry_marks": 88}
      ]
      
      
    return (
        <div>
            <LineChart  width={400} height={400} data={subjectMarksData}>
                <Line dataKey="math_marks" > </Line>
                <Line dataKey="physics_marks" > </Line>
                <Line dataKey="chemistry_marks" > </Line>
            </LineChart>
            
        </div>
    );
};

export default Chart;