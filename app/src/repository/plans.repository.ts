import {plans} from "../store/Form/plans.ts";
import {Plan} from "../interfaces/plan.interface.ts";

const plansRepository = {
    all: (): Plan[] => plans,
}

export default plansRepository
