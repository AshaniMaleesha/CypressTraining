import 'cypress-file-upload';

describe('file upload ', function(){
    it('Upload single file',function(){
        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('#file-upload').attachFile('Ashani MaleeshaCV_.pdf');
        cy.get('#file-submit').click()
        cy.wait(5000)
        cy.get("div[class='example'] h3").should('have.text','File Uploaded!')
    })

    it('rename file when uploading',function(){
        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('#file-upload').attachFile({filePath:'Ashani MaleeshaCV_.pdf',fileName:'Test1.pdf'});
        cy.get('#file-submit').click()
        cy.wait(5000)
        cy.get("div[class='example'] h3").should('have.text','File Uploaded!')
    })

    it('file upload-drag and drop',function(){
        cy.visit('https://the-internet.herokuapp.com/upload')

        cy.get('#drag-drop-upload').attachFile('Ashani MaleeshaCV_.pdf',{subjectType:'drag-n-drop'});
        cy.wait(5000)
        cy.get('#drag-drop-upload > .dz-preview > .dz-details > .dz-filename > span').contains('Ashani MaleeshaCV_.pdf');
    })

    it.skip('multiple file upload', function(){
        cy.get('https://davidwalsh.name/demo/multipe-file-upload.php')

        cy.get('#fileToUpload').attachFile(['file1.pdf','file2.pdf']);
        cy.wait(5000)
        //assertion
        cy.get('validation point').should('contain.text','you selected : ')
    })

    it.only('shadow dom',function(){
        cy.visit('https://www.htmlelements.com/demos/fileupload/shadow-dom/index.htm')
        cy.get('.smart-browse-input',{includeShadowDom:true}).attachFile('Ashani MaleeshaCV_.pdf')
        cy.get('.smart-item-name',{includeShadowDom:true}).contains('Ashani MaleeshaCV_.pdf');
    })
   
})