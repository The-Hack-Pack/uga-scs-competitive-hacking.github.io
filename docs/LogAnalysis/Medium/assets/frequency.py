# Open the input file and output file
with open("ichika-nito.log", "r") as infile, open("frequency.txt", "w") as outfile:
    # Skip the header lines
    for line in infile:
        # Check if the line contains valid data (ignores header and separator)
        if line.startswith("|") and not line.startswith("|------------|"):
            # Split the line based on the delimiter "|"
            parts = line.split("|")
            # Extract the frequency and strip any whitespace
            frequency = parts[3].strip()
            # Write the frequency to the output file
            outfile.write(frequency + "\n")
