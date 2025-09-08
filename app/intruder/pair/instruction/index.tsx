import Instruction from '@/components/Instruction';
import { intruderInstructionFR } from '@/constants/instruction';

export default function InstructionPairScreen() {
    return (
        <Instruction
            instruction={intruderInstructionFR.pair}
            url='/intruder/pair'
        />
    )
}