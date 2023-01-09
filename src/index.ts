import express, { Request, Response } from 'express'
import cors from 'cors'
import { student, } from './database'
import { TStudent } from './types'

const app = express()

app.use(express.json())
app.use(cors())

app.listen(3003, () => {
    console.log("Servidor rodando na porta 3003")
})

app.get('/ping', (req: Request, res: Response) => {
    res.send('Pong!')
})


app.get(`/student`,(req: Request, res: Response)=>{
    res.status(200).send(student)
})

app.get(`/student/search`, (req: Request, res: Response)=>{
    const q = req.query.q as string 

    const result: TStudent[] = student.filter((students)=> students.name.toLowerCase().includes(q.toLowerCase()))

    res.status(200).send(result)

    
})