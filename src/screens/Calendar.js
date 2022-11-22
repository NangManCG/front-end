import React, { Component } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import '../styles/MyCalendar.css'
class MyCalendar extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <h3>Calendar</h3>
                &nbsp;
                <div className='MyCalendar'>
                    <FullCalendar defaultView="dayGridMonth" plugins={[ dayGridPlugin ]} />
                </div>
            </div>
        )
    }
}

export default MyCalendar;