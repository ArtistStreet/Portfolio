import os 
forder = r'E:\\code\\web\\img'
def listDir(dir):
    fileNames = os.listdir(dir)
    for fileName in fileNames:
        print("./"+fileName)
if __name__ == '__main__':
    listDir(forder)