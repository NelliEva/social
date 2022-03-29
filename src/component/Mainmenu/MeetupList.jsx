import MeetupItem from '../MeetupItem';

function MeetupList(props) {
	return(
		<div className='container'>
      {props.meetups.map((meetup) => (
        <MeetupItem
          key={meetup.id}
          id={meetup.id}
          image={meetup.image}
          city={meetup.city}
          description={meetup.discription}
        />
      ))}
    </div>
	)
}


export default MeetupList;