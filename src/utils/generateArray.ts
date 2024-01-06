const generateArray= (value: string) =>{
    return Array.from({ length: 6 }, (_, index) => `${value}-${index + 1}`);
}
export default generateArray