

def main():
    file_text = []
    titles = ["introduction of technology", "applications of the technology",
              "critical discussion of the technology and its applications", "sources"]
    text = 0
    data_dict = {}  # Renamed variable from 'dict' to 'data_dict'
    section = "N/A"

    with open("paper.txt", "r") as file:
        file_text = file.readlines()

    for i in range(len(file_text)):
        if file_text[i][-1] == "\n":
            file_text[i] = file_text[i][:-1]
    while "" in file_text:
        file_text.remove("")
    while text < len(file_text):
        if file_text[text].lower() in titles:
            section = file_text[text]
            text += 1
            print("Section is set to " + section)
        else:
            if section in data_dict:
                data_dict[section].append(file_text[text])
            else:
                data_dict[section] = [file_text[text]]
            print("Added " + file_text[text])
            print(data_dict)
            text += 1
    print("Completed!")
    return data_dict


if __name__ == "__main__":
    main()
