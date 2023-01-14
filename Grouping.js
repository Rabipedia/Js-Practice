const names = [ 'Rabi', 'Anisha', 'Lamiya', 'Masud', 'Munni', 'Nadia', 'Arowa', 'Unayza', 'Nazib', 'Jaheed', 'Imon', 'Shiblu', 'Rafi', 'Ahad', 'Rabbi'];

const namesGrouped = names.reduce((acc, cur) => {
    const firstLetter = cur[0].toString();
    if(firstLetter in acc){
        acc[firstLetter].push(cur)
    }else {
        acc[firstLetter] = [cur]
    }
    return acc;
}, {})

Object.keys(namesGrouped).forEach(item => {
    console.log('-------',item, '---------');
    namesGrouped[item].forEach(name => console.log(name));
})

//console.log(namesGrouped)