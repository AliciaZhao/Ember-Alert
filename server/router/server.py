from fastapi import APIRouter, HTTPException, status, Depends
import httpx, json

from schema.fireschema import FireSchema
from db import get_db, FireModel
from sqlalchemy.orm import Session

# define new router
server_api = APIRouter()

VALID_COUNTY = ["Santa Clara", "Santa Clara County", "County of Santa Clara", "SCC", "SCL"]


# get all fires in Santa Clara County 
@server_api.get("/fires", response_model=list[FireSchema])
async def get_fires(county: str, db: Session = Depends(get_db)) -> list[FireSchema]:
    if county not in VALID_COUNTY:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Not a valid county in query")

    try:
        fires = db.query(FireModel).filter(FireModel.county == county).all()

        if not fires:
            raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="No fires at the momment")
        return fires
        
    except Exception as e:
        raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail="Database error occured.")
    

# get info for a specific fire based on a fire's id
@server_api.get("/fire-data/{fire_id}", response_model=FireSchema)
async def get_fire_data(fire_id: str, db: Session = Depends(get_db)) -> FireSchema:
    if not fire_id:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="No fire id provided")
    
    try:
        fire_data = db.query(FireModel).filter(FireModel.id == fire_id).first()

        if not fire_data:
            raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail=f"Fire (ID: {fire_id}) does not exist")

        return fire_data
    except Exception as e:
        raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail="Database error occured.")