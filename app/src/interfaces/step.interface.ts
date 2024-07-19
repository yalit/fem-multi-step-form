export default interface Step {
    name: string,
    previous: Step|null,
    next: Step|null
}
