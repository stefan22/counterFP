import { 
    addForm, 
    is_internal_release, 
    getFormValues, 
    editions,
    get_software_name
} from './helpers.js'; 
import './styles.js';  // general styling


const releaseType = version => `v${is_internal_release(version) ? 
    version + ' [internal]' : version}`;


function generate_software_description(obj) {
    const  { sid:software_id, eid:edition_id, ver:version } = obj;
    let edition = editions.filter(itm => itm.edition_id === edition_id);
    let software = get_software_name(software_id);

    // no software/edition id match
    if (!edition.length || software === software_id) return 'to be written';
    return `${software} (${edition[0].edition_name}) ${releaseType(version)}`;  
}


const handleForm = e => {
    e.preventDefault();
    const output = document.getElementById('output');
    output.innerHTML = generate_software_description(getFormValues());
    document.forms[0].reset();
}

const init = () => {
    const form = document.getElementById('form');
    addForm('form');
    form.addEventListener('submit', handleForm, false);
}



document.addEventListener('DOMContentLoaded', init);



// 'PPB','Std','2.3.1'
// returns => 'PortraitPro Body (Standard Edition) v2.3.1'

// 'PPB','Std','2.3.1'
// returns => 'PortraitPro Body (Standard Edition) v2.3.1 [internal]'

// 'FP', 'Studio'
// returns => FoodscapePro (Studio) v1.0.0
