

const obj = [
    {id :1  , name: 'IRFAN1' , salary: 200 },
    {id :2  , name: 'IRFAN2' , salary: 200 },
    {id :3  , name: 'IRFAN3' , salary: 200 },
    {id :4  , name: 'IRFAN4' , salary: 200 },
    {id :5  , name: 'IRFAN5' , salary: 3200 },
    {id :6  , name: 'IRFAN6' , salary: 200 },
    {id :7  , name: 'IRFAN7' , salary: 200 },
    {id :8  , name: 'IRFAN8' , salary: 2400 },
    {id :9  , name: 'IRFAN9' , salary: 200 },
    {id :10  , name: 'IRFAN10' , salary: 200 }, 
    {id :11  , name: 'IRFAN11' , salary: 200 },
    {id :12  , name: 'IRFAN1' , salary: 200 },
    {id :13  , name: 'IRFAN3' , salary: 200 },
    {id :14  , name: 'IRFAN4' , salary: 200 },
    {id :15  , name: 'IRFAN5' , salary: 3200 },
    {id :16  , name: 'IRFAN6' , salary: 200 },
    {id :17  , name: 'IRFAN7' , salary: 200 },
    {id :18  , name: 'IRFAN8' , salary: 2400 },
    {id :19  , name: 'IRFAN9' , salary: 200 },
    {id :20  , name: 'IRFAN10' , salary: 200 }, 
    {id :21  , name: 'IRFAN11' , salary: 200 },
    
]



let currentPage = 1
let itemsPerPage = 5
var sortorder = null;

const showintable=(obj)=>{
    const tablebody = document.getElementById('tablebody')
    tablebody.innerHTML = ''
    const h3 = document.getElementById('total_sum')
    h3.innerHTML = ''

    var tr = ''
    let totalSalary = 0; 
    
    const startIndex = (currentPage - 1) * itemsPerPage;
    console.log(startIndex)
    const endIndex = startIndex + itemsPerPage;
    console.log(endIndex)

    const slicedData = obj.slice(startIndex, endIndex);

    slicedData.map(o=>{
        totalSalary +=o.salary
        tr+=`<tr>
            <td>${o.id}</td>
            <td>${o.name}</td>
            <td>${o.salary}</td>
           
            </tr>`
            
            return tr
        })
    
  
   console.log(totalSalary)
    h3.innerHTML = totalSalary

    tablebody.innerHTML = tr
}
    const sortasc = () => {
        if (sortorder == null || sortorder == 'desc') {
            const sortedid = obj.sort((b, a) => a.id - b.id);
           // document.getElementById('sortspan').innerText = 'desc'
            console.log(sortedid)  
            sortorder = 'asc'
     // obj.id = [sortedid]
    //  console.log(obj.id)
    showintable(sortedid)
        }
        else{
            const sortedid = obj.sort((a, b) => a.id - b.id);
           // document.getElementById('sortspan').innerText = 'asc'
            console.log(sortedid) 
            sortorder = 'desc'  
     // obj.id = [...sortedid]
    //  console.log(obj.id)
    showintable(sortedid)
        }

};

const ascid = document.getElementById('ascid');
ascid.addEventListener('click', sortasc);


const prevpage =()=>{
    if(currentPage>1){
        currentPage--
        showintable(obj)
    }
}

const nextpage =()=>{
    const max_page = Math.ceil(obj.length / itemsPerPage);
    if(currentPage < max_page){
        currentPage++
        showintable(obj)
    }
}

const prevbutton = document.getElementById('prevbutton').addEventListener('click' ,prevpage )
const nextbutton = document.getElementById('nextbutton').addEventListener('click' ,nextpage )

const pagination_container = document.getElementById('pagination_container')

const updatePagination = () => {
    pagination_container.innerHTML = '';

    const maxPage = Math.ceil(obj.length / itemsPerPage);

    
    for (let i = 1; i <= maxPage; i++) {
        const button = document.createElement('button');
        button.innerText = i;
        button.addEventListener('click', () => {
            currentPage = i;
            showintable(obj);
        });
        pagination_container.appendChild(button);
    }
};
updatePagination()
showintable(obj);

