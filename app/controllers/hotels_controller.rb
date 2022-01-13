class HotelsController < ApplicationController
  before_action :set_hotel, only: %i[show update destroy]
  before_action :set_trip, only: %i[index create show update destroy]

  def index
    render json: @trip.hotels.hotel_json, status: :ok
  end

  def show
    render json: @hotel.hotel_json, status: :ok
  end

  def create
    @hotel = @trip.hotels.create(hotel_params)
    render json: @trip.hotels.hotel_json, status: :ok if @hotel
  end

  def update
    @hotel.update(hotel_params)
    render json: @hotel.hotel_json, status: :ok
  end

  def destroy
    render json: @trip.hotels.hotel_json, status: :ok if @hotel.destroy()
  end

  private

  def set_hotel
    hotel = params[:id] || params[:hotel_id]
    @hotel = Hotel.find(hotel)
  end

  def set_trip
    @trip = Trip.find(params[:trip_id])
  end

  def hotel_params
    params.require(:hotel).permit(:check_in, :check_out, :location,
                                   cost_attributes: %i[amount])
  end
end
