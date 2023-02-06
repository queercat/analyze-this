# Covered
AI powered cover letter writer.

# Deployment

clone it

    git clone https://github.com/queercat/covered
    cd covered
    
build it

    docker build -t covered .
    
run it

    docker run -p 8000:8000 -e GPT_URL={GPT_API_ENDPOINT} covered
