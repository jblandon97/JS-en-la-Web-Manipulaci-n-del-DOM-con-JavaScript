//IIFE
(() => {
      const btn = document.querySelector("[data-form-btn]")

      const checkIcon = () => {
            // const icons = document.getElementsByClassName("far fa-check-square icon")
            const icons = document.querySelectorAll(".far.fa-check-square")
            let enter = false;
            icons.forEach((icon) => {
                  icon.addEventListener("click", (e) => {
                        if (!enter) {
                              e.target.classList.add("green")
                              enter = true;
                        } else {
                              e.target.classList.remove("green")
                              enter = false;
                        }
                  })
            })

      }
      
      const deleteTask = () => {
            const icons = document.getElementsByClassName("fas fa-trash-alt trashIcon icon")
            for (let index = 0; index < icons.length; index++) {
                  const element = icons[index]
                  element.addEventListener("click", (e) => {
                        const parent = (e.target.parentElement)
                        parent.remove();
                  })

            }
      }



      const createTask = function (e) {
            e.preventDefault()
            const input = document.querySelector("[data-form-input")
            const task = document.createElement("li")
            task.setAttribute("class", "card")
            const list = document.querySelector("[data-list]")
            const content = `            <div>
            <i class="far fa-check-square icon"></i>
            <span class="task">${input.value}</span>
          </div>
          <i class="fas fa-trash-alt trashIcon icon"></i>`
            task.innerHTML = content
            list.appendChild(task)
            input.value = "";
            checkIcon();
            deleteTask();

      }

      btn.addEventListener("click", createTask)


})();

