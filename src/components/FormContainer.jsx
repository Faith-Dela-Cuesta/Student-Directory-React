const FormContainer = () => {
    return (
        <section id="formContainer">
          <form id="studentForm">
           <div class="input-fields">
            <label for="name">Student Name</label>
            <input type="text" name="name" id="name"/>
        </div>

         <div class="input-fields">
          <label for="srcode">Srcode</label>
          <input type="text" name="Srcode" id="Srcode"/>
        </div>

        <div class="input-fields">
          <label for="program">Program</label>
          <input type="text" name="program" id="program"/>
        </div>

        <div>
          <button type="submit">Add Student</button>
        </div>
       </form>
     </section>
    );
}

export default FormContainer;