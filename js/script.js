'use strict';
//Funções JQuery
$(function () {
    const cursos = $('div.educacao');
    const xpTrabalhos = $('div.trabalhos');

    // Função para criar scroll dinâmico para as sessões Sobre mim, Experiências e Contato.
    $('nav a').click(function (e) {
        e.preventDefault()
        const id = $(this).attr('href'), targetOffset = $(id).offset().top
        $('html, body').animate({
            scrollTop: targetOffset
        }, 500)
    })
    // Função para quando pressionar o botão do menu, ele faça algo.
    $(".menu-button").click(function () {
        const menuMobile = $('nav.mobile')
        if (menuMobile.is(':hidden') == false) {
            menuMobile.slideToggle();
            window.document.querySelector(".fa-bars").style.display = 'block';
            window.document.querySelector(".fa-times").style.display = 'none';
        } else {
            menuMobile.slideToggle();
            window.document.querySelector(".fa-bars").style.display = 'none';
            window.document.querySelector(".fa-times").style.display = 'block';
        }
    })
    // Funções para quando pressionar algum dos botões de Trabalhos ou Educação, ele mostre o conteúdo.
    $("#job").click(function () {
        if (xpTrabalhos.is(':hidden') == true) {
            cursos.fadeOut();
            xpTrabalhos.fadeIn(1500);
            window.document.querySelector("#edu").style.backgroundColor = "#FFFFFF";
            window.document.querySelector("#job").style.backgroundColor = "#F2F2F2";
        }
    })
    $("#edu").click(function () {
        if (cursos.is(':hidden') == true) {
            xpTrabalhos.fadeOut();
            cursos.fadeIn(1500);
            window.document.querySelector("#job").style.backgroundColor = "#FFFFFF";
            window.document.querySelector("#edu").style.backgroundColor = "#F2F2F2";
        }
    })
    // Função do botão para retornar ao topo do site.
    $("#return-button").click(function () {
        const topo = $('header'), targetOffset = $(topo).offset().top
        $('html, body').animate({
            scrollTop: targetOffset
        }, 500)
    })
})

// Funções para capturar o valor do scroll na página atual.
window.onscroll = function () {
    scrollFunction();
}

function scrollFunction() {
    const returnButton = $("button#return-button");
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        returnButton.fadeIn(250);
    } else {
        returnButton.fadeOut(250);
    }
}


window.onload = function () {
    // Comando para deixar o ícone X do menu de navegação 'escondido' por padrão no mobile.
    window.document.querySelector(".fa-times").style.display = 'none';

    // Os comandos abaixo servem para atualizar a minha idade automaticamente e para atualizar o ano de direito autoral do site.
    let date = new Date;
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let bdYear = 2004;

    let yearOld = year - bdYear;
    let diffMonth = 7 - month;

    if (diffMonth <= 0) {
        window.document.querySelector('#yearold').innerHTML = yearOld;
    } else {
        window.document.querySelector('#yearold').innerHTML = yearOld - 1;
    }
    window.document.getElementById('copyright-year').innerHTML = year;
}

    // Progress bars
    (function() {
  
        var SkillsBar = function( bars ) {
          this.bars = document.querySelectorAll( bars );
          if( this.bars.length > 0 ) {
            this.init();
          } 
        };
        
        SkillsBar.prototype = {
          init: function() {
            var self = this;
            self.index = -1;
            self.timer = setTimeout(function() {
              self.action();
            }, 500);
            
            
          },
          select: function( n ) {
            var self = this,
              bar = self.bars[n];
              
              if( bar ) {
                var width = bar.parentNode.dataset.percent;
              
                bar.style.width = width;
                bar.parentNode.classList.add( "complete" ); 
              }
          },
          action: function() {
            var self = this;
            self.index++;
            if( self.index == self.bars.length ) {
              clearTimeout( self.timer );
            } else {
              self.select( self.index );  
            }
            
            setTimeout(function() {
              self.action();
            },500);
          }
        };
        
        window.SkillsBar = SkillsBar;
        
      })();
      
      (function() {
        document.addEventListener( "DOMContentLoaded", function() {
          var skills = new SkillsBar( ".skillbar-bar" );
        });
      })();