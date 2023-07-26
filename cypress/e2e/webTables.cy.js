/// <reference types="Cypress"/>
describe('handle web tables',function(){
    this.beforeEach('Login',function(){
        cy.visit('https://demo.opencart.com/admin/index.php')
        cy.get('#input-username').type('demo')
        cy.get('#input-password').type('demo')
        cy.get("button[type='submit']").click()

        cy.wait(4000)
        cy.get('.btn-close').click()

        //customer main menu-->customer sub menu
       cy.get('#menu-customer >a').click() //customer main 
       cy.get('#menu-customer>ul>li:first-child').click() //customer child


    })
    
    it.skip('check no of raws and columns', function(){
        cy.get('table.table-bordered.table-hover>tbody>tr').should('have.length',10)
        cy.get('table.table-bordered.table-hover>thead>tr>td').should('have.length',7)
    })

    it.skip('check data from specific cell and column',function(){
        cy.get('.table.table-bordered.table-hover>tbody>tr:nth-child(5)>td:nth-child(3)')
        .contains('xvrt@test.com')
    })

    it.skip('read all the raws and collumn data in the first page', function(){
        cy.get('.table.table-bordered.table-hover>tbody>tr')
            .each(($row,index,$rows)=>{
                cy.wrap($row).within( ()=>{
                    cy.get('td').each(($col,index,$rows)=>{
                        cy.log($col.text());
                    })
                })
         })
    })

    it('pagination',function(){

        //get total no of pages
       /* let totalPages;
        cy.get('.col-sm-6.text-end').then( (e) =>{
            let mytext = e.text();  //Showing 1 to 10 of 13999 (1400 Pages)
            totalPages=mytext.substring(mytext.indexOf("(")+1,mytext.indexOf("Pages")-1)
            cy.log('No of total pages ===> '+totalPages)
        })*/

        let totalPages=3;

        for(let p=1;p<=totalPages;p++){
            if(totalPages>1){
                cy.log('Active page is-->' +p);

                cy.get("ul[class='pagination']>li:nth-child("+p+")").click()
                cy.wait(3000)

                cy.get('.table.table-bordered.table-hover>tbody>tr')
                .each(($row,index,$rows)=>{
                    cy.wrap($row).within( ()=>{
                        cy.get('td:nth-child(3)').then((e)=>{
                            cy.log(e.text());   //email
                        })
                    })
             })

            }
        }
    })

    
})