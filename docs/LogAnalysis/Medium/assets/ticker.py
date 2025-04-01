# Open the input file and output file
with open("ichika-nito.log", "r") as infile, open("ticker.txt", "w") as outfile:
    # Skip the header lines
    for line in infile:
        # Check if the line contains valid data (ignores header and separator)
        if line.startswith("|") and not line.startswith("|------------|"):
            # Split the line based on the delimiter "|"
            parts = line.split("|")
            # Extract the ticker and strip any whitespace
            ticker = parts[2].strip()
            # Write the ticker to the output file
            outfile.write(ticker + "\n")

