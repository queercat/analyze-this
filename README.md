# Covered
AI powered cover letter writer.

https://user-images.githubusercontent.com/22136781/216958617-bf7e2408-91cb-4635-af41-955cf1241ddc.mp4

# Deployment

clone it

    git clone https://github.com/queercat/covered
    cd covered
    
build it

    docker build -t covered .
    
run it

    docker run -p 8000:8000 -e GPT_URL={GPT_API_ENDPOINT} covered
