export const editions = [
    {
        edition_id: 'Std',
        edition_name: 'Standard Edition'
    },
    {
        edition_id: 'StdTrial',
        edition_name: 'Trial'
    },
    {
        edition_id: 'Studio',
        edition_name: 'Studio'
    }
];


export const get_software_name = sid => {
    switch(sid) {
        case 'PP':
            return 'PortraitPro';
        case 'PPB':
            return 'PortraitPro Body';
        case 'FP':
            return 'FoodscapePro';
        case 'LP':
            return 'LandscapePro';
        case 'SPE':
            return 'Smart Photo Editor';
        default:
            return sid;
    }
}

const buildForm = () => (`
    <form>
        <label for="sid">Software Id:</label>
        <input type="text" required id="sid" placeholder="case sensitive" name="sid"><br>

        <label for="eid">Edition Id:</label>
        <input type="text" required id="eid" placeholder="case sensitive" name="eid"><br>

        <label for="ver">Version Type: </label>
        <input type="text" id="ver" name="ver"><br>

        <button type="submit" value="submit">Submit</button> 
    </form>
`);

/*
@addForm
@param: dom handle id
returns html form
*/
export const addForm = handle => 
    document.getElementById(handle).innerHTML = buildForm();


/*
@is_internal_release
@param: version number <string>
returns boolean
*/
export const is_internal_release = ver => 
    typeof ver === 'string' && ver.split('.').length === 4 ? true : false;


/*
@getFormValues
returns software,edition ids & version number <object>
*/   
export const getFormValues = () => {
    const sid = document.getElementById('sid'),
        eid = document.getElementById('eid'),
        ver = document.getElementById('ver');
    return {
        sid: sid.value,
        eid: eid.value,
        ver: ver.value || '1.0.0',
    };
}