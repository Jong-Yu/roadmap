type Project = {
    id: string;
    name: string;
    children: Task[]
};

type Task = {
    id: string;
    name: string;
    start: Date;
    end: Date;
}