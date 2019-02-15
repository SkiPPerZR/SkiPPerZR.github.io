width=screen.width; // ширина 

            height=screen.height; // высота 

            var resol=width; 

            switch (resol) { 

               case '768' : 

               document.write('<ol class="carousel-indicators hidden-lg hidden-md">
               <li data-target="#dws-slider" data-slide-to="0" class="active"></li>
               <li data-target="#dws-slider" data-slide-to="1"></li>
               <li data-target="#dws-slider" data-slide-to="2"></li>
               <li data-target="#dws-slider" data-slide-to="3"></li>
           </ol>'); 

               break; 

               case '769' : 

               document.write('<ol class="pag1 carousel-indicators hidden-sm hidden-xs">
               <li data-target="#dws-slider" data-slide-to="0" class="active">
                   <img src="img/slider_1pre.jpg" alt="Картинка 1">
                   <h4>Акция действует с 01.07.18</h4>
                   <p><strong>Этот текст добавлен для демонстрации на странице</strong></p>
               </li>
               <li data-target="#dws-slider" data-slide-to="1">
                   <img src="img/slider_2pre.jpg" alt="Картинка 2">
                   <h4>Акция действует с 01.07.18</h4>
                   <p><strong>Этот текст добавлен для демонстрации на странице</strong></p>
               </li>
               <li data-target="#dws-slider" data-slide-to="2">
                   <img src="img/slider_3pre.jpg" alt="Картинка 3">
                   <h4>Акция действует с 01.07.18</h4>
                   <p><strong>Этот текст добавлен для демонстрации на странице</strong></p>
               </li>
               <li data-target="#dws-slider" data-slide-to="3">
                   <img src="img/slider_4pre.jpg" alt="Картинка 4">
                   <h4>Акция действует с 01.07.18</h4>
                   <p><strong>Этот текст добавлен для демонстрации на странице</strong></p>
               </li>
           </ol>'); 

               break; 

               }