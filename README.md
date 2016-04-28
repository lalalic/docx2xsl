# docx2xsl

# how to implement
root
    layout-master-set
        simple-page-master

    page-sequence
        page
            region
                body,after/before,start/end
                    block areas
                        paragraph, table, list
                        
