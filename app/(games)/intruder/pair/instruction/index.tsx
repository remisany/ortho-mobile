import Instruction from '@/components/Instruction';
import { intruder } from '@/locales/fr/instruction';

export default function InstructionPairScreen() {
    return (
        <Instruction
            instruction={intruder.pair}
            url='/intruder/pair'
        />
    )
}