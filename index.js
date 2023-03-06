document.querySelector(".burger").addEventListener("click", function () {
    document.getElementById("nav").classList.toggle("open");
  });
  
  const links = document.querySelectorAll(".header_item_link");
  for (let link of links) {
    link.addEventListener("click", function () {
      document.getElementById("nav").classList.remove("open");
    });
  }
  
  document.querySelector(".burger").addEventListener("mouseout", function () {
    document.getElementById("nav").classList.remove("open");
  });
  
  const garden_cards = document.querySelectorAll(".garden_card");
  const planting_cards = document.querySelectorAll(".planting_card");
  const lawn_cards = document.querySelectorAll(".lawn_card");
  
  document.getElementById("gardens_btn").addEventListener("click", function () {
    document.getElementById("gardens_btn").classList.toggle("active");
  
    for (let card of planting_cards) {
      card.classList.toggle("blur");
    }
    for (let card of lawn_cards) {
      card.classList.toggle("blur");
    }
  
    
  });
  
  document.getElementById("lawn_btn").addEventListener("click", function () {
    document.getElementById("lawn_btn").classList.toggle("active");
    for (let card of planting_cards) {
      card.classList.toggle("blur");
    }
    for (let card of garden_cards) {
      card.classList.toggle("blur");
    }
  });
  
  
  
  if (document.getElementById("gardens_btn").classList.contains("active") &&
    document.getElementById("lawn_btn").classList.contains("active")
    ) {
      console.log('ldld')
    };
  
  
  document.getElementById("planting_btn").addEventListener("click", function () {
    document.getElementById("planting_btn").classList.toggle("active");
    for (let card of garden_cards) {
      card.classList.toggle("blur");
    }
    for (let card of lawn_cards) {
      card.classList.toggle("blur");
    }
  
  });
  
  
  
  const btns = document.querySelectorAll(".servise-btn");
  const selectButtons = [];
  const allBtns = [];
  let disabledBtn = "";
  
  btns.forEach((button) => {
    allBtns.push(button.id);
    button.addEventListener("click", (event) => {
      if (selectButtons.includes(event.target.id)) {
        selectButtons.splice(selectButtons.indexOf(event.target.id), 1);
      } else {
        selectButtons.push(event.target.id);
      }
      if (selectButtons.length === 2) {
        disabledBtn = allBtns.filter((it) => !selectButtons.includes(it))[0];
        document.getElementById(disabledBtn).classList.add("button--disabled");   
      } else if (disabledBtn) {
        document
          .getElementById(disabledBtn)
          .classList.remove("button--disabled");
        disabledBtn = "";
      }
    });
  });
  
  // // Аккордион
  
  
  const acc_btns = document.querySelectorAll(".prices_item");
  const close_acc_btns = document.querySelectorAll(".prices_list_accordion_item_header"); 
  
  for (let i = 0; i < acc_btns.length; i++) {
      acc_btns[i].addEventListener("click", function() {
          console.log('click')
          const accordion = this.nextElementSibling;
          accordion.classList.add('active');
          
      });
  }
  const acc_items = document.querySelectorAll(".accordion");
  const price_items = document.querySelectorAll(".prices_item");
  
  // // //Открыть аккордеон
  // const openAcc = function () {
            
  //     for (let acc_item of acc_items) {
  //         acc_item.classList.add("active");
  //     }
  //     for (let price_item of price_items) {
  //         price_item.classList.add("hidden");
  //     } }
          
  // Закрыть аккордеон
  // const closeAcc = function () {
  
  //     for (let acc_item of acc_items) {
  //         acc_item.classList.remove("active");
  //     }
  //     for (let price_item of price_items) {
  //         price_item.classList.remove("hidden");
  //     }
  
  // }
  
  
  // for (let i=0; i <acc_items.length; i++ ) {
  //     acc_items[i].addEventListener('click', function () {
  //         console.log(acc_items);
  //     })
  // }
  
  // const bnt_accs = document.querySelectorAll(".bnt_acc");
  
  // for (let i=0; i <bnt_accs.length; i++ ) {
  //   bnt_accs[i].addEventListener('click', function () {
  //     for (let item of items) {
  //       item.classList.add("active");
  //     }
  
  //   })
  // }
  
  
  const closes = document.querySelectorAll(".prise_img_close");
  const items = document.querySelectorAll(".accordion");
  
  
  for (let i=0; i <closes.length; i++ ) {
    closes[i].addEventListener('click', function () {
      for (let item of items) {
        item.classList.remove("active");
      }
  
  })
  }
  
  
  // Селектор городов 
  
  document.querySelector('.contacts-city-img').addEventListener('click', function () {
    document.querySelector('.contacts-city').classList.add('hidden');
    document.querySelector('.contacts-city-select').classList.add('visible');
  })
  
  document.querySelector('.contacts-city-img-close').addEventListener('click', function () {
    document.querySelector('.contacts-city').classList.remove('hidden');
    document.querySelector('.contacts-city-select').classList.remove('visible');
  })
  
  document.getElementById('CAN_card_item').addEventListener('click', function () {
    document.getElementById('CAN_card').classList.add('visible')
    document.querySelector('.contacts-city').classList.remove('hidden');
    document.querySelector('.contacts-city-select').classList.remove('visible');
  }
  )
  
  document.querySelector('.contacts-city-img').addEventListener('click', function () { 
    document.getElementById('CAN_card').classList.remove('visible')
    document.querySelector('.contacts-city-select').classList.add('visible');
    
   })
  
   document.getElementById('NY_card_item').addEventListener('click', function () {
    document.getElementById('NY_card').classList.add('visible')
    document.querySelector('.contacts-city').classList.remove('hidden');
    document.querySelector('.contacts-city-select').classList.remove('visible');
  }
  )
  
  document.querySelector('.contacts-city-img').addEventListener('click', function () { 
    document.getElementById('NY_card').classList.remove('visible')
    document.querySelector('.contacts-city-select').classList.add('visible');
    
   })
  
  
   document.getElementById('YON_card_item').addEventListener('click', function () {
    document.getElementById('YON_card').classList.add('visible')
    document.querySelector('.contacts-city').classList.remove('hidden');
    document.querySelector('.contacts-city-select').classList.remove('visible');
  }
  )
  
  document.querySelector('.contacts-city-img').addEventListener('click', function () { 
    document.getElementById('YON_card').classList.remove('visible')
    document.querySelector('.contacts-city-select').classList.add('visible');
    
   })
  
   document.getElementById('SHR_card_item').addEventListener('click', function () {
    document.getElementById('SHR_card').classList.add('visible')
    document.querySelector('.contacts-city').classList.remove('hidden');
    document.querySelector('.contacts-city-select').classList.remove('visible');
  }
  )
  
  document.querySelector('.contacts-city-img').addEventListener('click', function () { 
    document.getElementById('SHR_card').classList.remove('visible')
    document.querySelector('.contacts-city-select').classList.add('visible');
    
   })
  
   document.querySelector('.submit').addEventListener('click', function () { 
   window.open('tel:+098765432543', '_self'); 
   } )