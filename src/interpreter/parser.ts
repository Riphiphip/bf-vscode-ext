import { Readable } from "stream";

interface ArithmeticOp {
    op: '+' | '-',
    count: number,
};

interface MemPtrOp {
    op: '<' | '>',
    count: number,
};

interface IOOp {
    op: '.' | ',',
};

interface Loop  {
    op: '[]',
    content: ProgramSegment
};

type ProgramSegment = (Loop | MemPtrOp | ArithmeticOp | IOOp)[];
