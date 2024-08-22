import PyPDF2

# PDFFile = open("Resume.pdf", 'rb')
#
# PDF = PyPDF2.PdfReader(PDFFile)
# pages = len(PDF.pages)
# key = '/Annots'
# uri = '/URI'
# ank = '/A'
#
# for page in range(pages):
#     print("Current Page: {}".format(page))
#     print(PDF.pages[page].extract_text())
#     print("\n\n\n\n")
#     print("Current Page links: {}".format(page))
#     pageSliced = PDF.pages[page]
#     pageObject = pageSliced.get_object()
#     if key in pageObject.keys():
#         ann = pageObject[key]
#         for a in ann:
#             u = a.get_object()
#             if uri in u[ank].keys():
#                 print(u[ank][uri])


def get_resume_text(filename):
    pdf_file = open(filename, 'rb')
    pdf = PyPDF2.PdfReader(pdf_file)
    pages = len(pdf.pages)
    text = ""
    for page in range(pages):
        text += pdf.pages[page].extract_text()

    pdf_file.close()
    return text
