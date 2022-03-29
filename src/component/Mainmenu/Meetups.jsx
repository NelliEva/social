import {useState} from 'react';
import {useEffect} from 'react';

import MeetupList from './MeetupList';




function Meetups() {

	const [isAdded, setIsAdded] = useState(true);
	const [newData, setNewData] = useState([]);
	const [searchOn, setSearchOn] = useState('');
	const [filteredResult, setFilteredResult] = useState([]);



	useEffect(() => {
          setIsAdded(true);
		  fetch('https://meetup-321b5-default-rtdb.firebaseio.com/meetup.json'
	   	).then(response => {
	   		return response.json();
	   	}).then(data => {
           const meetups = [];

           for (const key in data) {
           	const meetup = {
           		id: key,
           		...data[key]
           	};

           	meetups.push(meetup);
           }

	       setIsAdded(false);
	       setNewData(meetups);
	   	});

	}, []);

 

   	if(isAdded) {
   		return (
   			<p>Meetup Added Succesfully</p>
   			);
   	}

   	const Search =(searchValue) => {
      setSearchOn(searchValue)
      if (searchOn !== '') {
      const filteredData = newData.filter((item) => {
      	return Object.values(item).join('').toLowerCase().includes(searchOn.toLowerCase())
      })
      setFilteredResult(filteredData)
           
	} else {setFilteredResult(newData)}
	 
	}

	return(
	<div className='mainpage'>
		<h1>Meetups All Around The World</h1>
	    <div className='searchbox'>
			<input className='searchfield' placeholder='Search Meetups' onChange={(e) => Search(e.target.value)}></input>
		    
		</div>
		{filteredResult ?
		 <div >
			<MeetupList meetups={filteredResult}/>		
		</div> 
			:null}
		<div >
			<MeetupList meetups={newData}/>
			
		</div> 
	</div>
	)
}

export default Meetups;